import os
from pathlib import Path
from dotenv import load_dotenv
from pydantic_settings import BaseSettings

load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent
CORE = Path(__file__).resolve().parent


class Settings(BaseSettings):
    DEBUG: bool = os.environ.get("DEBUG", True)
    APP_ENV: str = os.environ.get("APP_ENV", "development")
    API_ENDPOINT: str = os.environ.get("API_ENDPOINT", "/")
    PROJECT_NAME: str = os.environ.get("PROJECT_NAME", "Portfolio")

    POSTGRES_DB: str
    POSTGRES_HOST: str
    POSTGRES_PORT: int
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str

    @property
    def DB_URL(self) -> str:
        return f"postgresql+asyncpg://{self.POSTGRES_USER}:{self.POSTGRES_PASSWORD}@{self.POSTGRES_HOST}:{self.POSTGRES_PORT}/{self.POSTGRES_DB}"

    # JWT
    ALGORITHM: str = "RS256"
    PRIVATE_KEY_PATH: Path = CORE / "certs" / "jwt-private.pem"
    PUBLIC_KEY_PATH: Path = CORE / "certs" / "jwt-public.pem"
    ACCESS_TOKEN_EXPIRES_MINUTES: float = .5
    REFRESH_TOKEN_EXPIRES_MINUTES: float = .2
    ACTIVATION_TOKEN_EXPIRES_MINUTS: int = 2

    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"
        extra = "ignore"


settings = Settings()
