import enum
from datetime import datetime
from sqlalchemy import (
    Column, Integer, String, Text, ForeignKey,
    DateTime, JSON, Enum, Table
)
from sqlalchemy.orm import relationship
from .base import Base


class StatusEnum(enum.Enum):
    active = "active"
    inactive = "inactive"


project_used_technology = Table(
    'project_used_technology',
    Base.metadata,
    Column('project_id', ForeignKey('projects.id'), primary_key=True),
    Column('technology_id', ForeignKey('technologies.id'), primary_key=True)
)


class Project(Base):
    __tablename__ = 'projects'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    description = Column(Text)
    image = Column(String, nullable=True)
    status = Column(Enum(StatusEnum), default=StatusEnum.active)
    features = Column(JSON)
    used_technologies = Column(JSON)

    links = relationship("Link", back_populates="project",
                         cascade="all, delete-orphan")


class Technology(Base):
    __tablename__ = 'technologies'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    icon = Column(String)


class Link(Base):
    __tablename__ = 'links'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    url = Column(String)
    icon = Column(String)

    project_id = Column(ForeignKey('projects.id'))

    project = relationship("Project", back_populates="links")


class Skill(Base):
    __tablename__ = 'skills'

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    level = Column(String)
    category = Column(String, nullable=True)
    years_of_experience = Column(Integer, nullable=True)

    user_id = Column(Integer, ForeignKey('users.id'))

    owner = relationship("User", back_populates="skills")


class Certification(Base):
    __tablename__ = 'certifications'

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String)
    institution = Column(String)
    year = Column(Integer)
    certificate_url = Column(String, nullable=True)


class Contact(Base):
    __tablename__ = 'contacts'

    id = Column(Integer, primary_key=True, index=True)
    email = Column(String)
    phone_number = Column(String)
    message = Column(Text)

    user_id = Column(Integer, ForeignKey('users.id'))

    owner = relationship("User", back_populates="contacts")


class Comment(Base):
    __tablename__ = 'comments'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String(255), nullable=False)
    content = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.utcnow)


class User(Base):
    __tablename__ = 'users'

    id = Column(Integer, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)

    skills = relationship("Skill", back_populates="owner",
                          cascade="all, delete-orphan")
    contacts = relationship(
        "Contact", back_populates="owner", cascade="all, delete-orphan")
