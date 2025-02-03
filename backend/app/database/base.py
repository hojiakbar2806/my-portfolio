from datetime import datetime, timezone
from sqlalchemy import Column, Date
from sqlalchemy.orm import DeclarativeBase
from app.database.session import async_engine


class Base(DeclarativeBase):
    created_at = Column(
        Date,
        default=datetime.now(timezone.utc)
    )
    updated_at = Column(
        Date,
        default=datetime.now(timezone.utc),
        onupdate=datetime.now(timezone.utc)
    )


async def create_tables() -> None:
    print("Ma'lumotlar ombori tiklanmoqda...")
    async with async_engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    print("Ma'lumotlar ombori tiklandi")
