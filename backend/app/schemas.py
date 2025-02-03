from typing import List
from pydantic import BaseModel
from datetime import datetime

from app.database.models import StatusEnum


class LinkSchema(BaseModel):
    name: str
    url: str
    icon: str


class TechnologySchema(BaseModel):
    name: str
    icon: str


class FeatureSchema(BaseModel):
    title: str
    description: str


class ProjectCreateSchema(BaseModel):
    title: str
    description: str
    image: str = None
    status: StatusEnum = StatusEnum.active
    features: List[FeatureSchema]
    links: List[LinkSchema] = []
    used_technologies: List[int] = []


class ProjectUpdateSchema(ProjectCreateSchema):
    pass


class ProjectResponseSchema(ProjectCreateSchema):
    id: int
    title: str
    description: str
    image: str = None
    status: StatusEnum = StatusEnum.active
    features: dict
    links: List[LinkSchema] = []
    used_technologies: List[TechnologySchema] = []
    created_at: datetime
    updated_at: datetime

    class Config:
        from_attributes = True
