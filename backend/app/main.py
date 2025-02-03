from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.router.project import router as poject_router
from app.router.technology import router as technology_router


# @asynccontextmanager
# async def lifespan(app: FastAPI):
#     yield await create_tables()

app = FastAPI(
    title=settings.PROJECT_NAME,
    openapi_url=f"{settings.API_ENDPOINT}/openapi.json",
    docs_url=f"{settings.API_ENDPOINT}/docs",
    redoc_url=f"{settings.API_ENDPOINT}/redoc",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(poject_router)
app.include_router(technology_router)
