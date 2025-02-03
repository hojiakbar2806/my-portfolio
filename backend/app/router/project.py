import json
from typing import List
from pydantic import Field
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import APIRouter, File, Form, HTTPException, Depends, UploadFile

from app.database.models import Link, Project, Technology
from app.database.session import get_async_session
from app import schemas

router = APIRouter(prefix="/projects", tags=["Projects"])


@router.post("", response_model=schemas.ProjectResponseSchema)
async def create_project(
        title: str = Form(...),
        description: str = Form(...),
        features: str = Form(...),
        links: str = Form(...),
        image: UploadFile = File(...),
        used_technologies: str = Form(...),
        status: schemas.StatusEnum = Form(...),
        session: AsyncSession = Depends(get_async_session)
):
    features = json.loads(features)
    links = json.loads(links)
    used_technologies = json.loads(used_technologies)

    new_project = Project(
        title=title,
        description=description,
        image=image,
        status=status,
        features=features,
        used_technologies=used_technologies
    )

    new_project.links = [Link(**link) for link in links]

    if used_technologies:
        technologies = await session.execute(select(Technology).filter(Technology.id.in_(used_technologies)))
        new_project.used_technologies = technologies.scalars().all()

    session.add(new_project)
    await session.commit()
    await session.refresh(new_project)

    return new_project


@router.get("", response_model=List[schemas.ProjectResponseSchema])
async def get_projects(session: AsyncSession = Depends(get_async_session)):
    result = await session.execute(select(Project))
    projects = result.scalars().all()
    return projects


@router.get("/{project_id}", response_model=schemas.ProjectResponseSchema)
async def get_project(project_id: int, session: AsyncSession = Depends(get_async_session)):
    result = await session.execute(select(Project).filter(Project.id == project_id))
    project = result.scalars().first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project


@router.put("/{project_id}", response_model=schemas.ProjectResponseSchema)
async def update_project(project_id: int, project_data: schemas.ProjectUpdateSchema, session: AsyncSession = Depends(get_async_session)):
    result = await session.execute(select(Project).filter(Project.id == project_id))
    project = result.scalars().first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")

    for key, value in project_data.dict(exclude_unset=True).items():
        setattr(project, key, value)

    project.links = [Link(**link.dict()) for link in project_data.links]

    if project_data.used_technologies:
        technologies = await session.execute(select(Technology).filter(Technology.id.in_(project_data.used_technologies)))
        project.used_technologies = technologies.scalars().all()

    await session.commit()
    await session.refresh(project)
    return project


@router.delete("/{project_id}")
async def delete_project(project_id: int, session: AsyncSession = Depends(get_async_session)):
    result = await session.execute(select(Project).filter(Project.id == project_id))
    project = result.scalars().first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")

    await session.delete(project)
    await session.commit()
    return {"message": "Project deleted successfully"}
