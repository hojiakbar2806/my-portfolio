from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from typing import List
from pydantic import BaseModel
from app.database.session import get_async_session
from app.database.models import Technology

router = APIRouter(prefix="/technologies", tags=["Technologies"])


class TechnologySchema(BaseModel):
    name: str
    icon: str


class TechnologyResponseSchema(TechnologySchema):
    id: int

    class Config:
        from_attributes = True


@router.post("", response_model=TechnologyResponseSchema)
async def create_technology(technology: TechnologySchema, session: AsyncSession = Depends(get_async_session)):
    new_technology = Technology(**technology.model_dump())
    session.add(new_technology)
    await session.commit()
    await session.refresh(new_technology)
    return new_technology


@router.get("", response_model=List[TechnologyResponseSchema])
async def get_technologies(session: AsyncSession = Depends(get_async_session)):
    result = await session.execute(select(Technology))
    technologies = result.scalars().all()
    return technologies


@router.get("/{technology_id}", response_model=TechnologyResponseSchema)
async def get_technology(technology_id: int, session: AsyncSession = Depends(get_async_session)):
    result = await session.execute(select(Technology).filter(Technology.id == technology_id))
    technology = result.scalars().first()
    if not technology:
        raise HTTPException(status_code=404, detail="Technology not found")
    return technology


@router.put("/{technology_id}", response_model=TechnologyResponseSchema)
async def update_technology(technology_id: int, technology_data: TechnologySchema, session: AsyncSession = Depends(get_async_session)):
    result = await session.execute(select(Technology).filter(Technology.id == technology_id))
    technology = result.scalars().first()
    if not technology:
        raise HTTPException(status_code=404, detail="Technology not found")

    for key, value in technology_data.dict(exclude_unset=True).items():
        setattr(technology, key, value)

    await session.commit()
    await session.refresh(technology)
    return technology


@router.delete("/{technology_id}")
async def delete_technology(technology_id: int, session: AsyncSession = Depends(get_async_session)):
    result = await session.execute(select(Technology).filter(Technology.id == technology_id))
    technology = result.scalars().first()
    if not technology:
        raise HTTPException(status_code=404, detail="Technology not found")

    await session.delete(technology)
    await session.commit()
    return {"message": "Technology deleted successfully"}
