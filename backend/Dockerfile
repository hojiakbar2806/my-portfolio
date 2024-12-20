# 1. Build bosqichi
FROM python:3.13-slim AS builder

# Minimal tizim paketlarini o'rnatish
RUN apt-get update && apt-get install -y --no-install-recommends \
    build-essential \
    curl \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Poetryni o'rnatish
RUN curl -sSL https://install.python-poetry.org | python3 -
ENV PATH="/root/.local/bin:$PATH"

# Ishchi katalog
WORKDIR /app

# Poetry fayllarni nusxalash
COPY pyproject.toml poetry.lock /app/

# Poetry orqali kutubxonalarni o‘rnatish
RUN poetry config virtualenvs.create false && poetry install --no-root --only main

# Loyihaning barcha fayllarini nusxalash
COPY . /app

# Buildni yakunlash
RUN poetry build

# 2. Final bosqich
FROM python:3.13-slim AS runtime

# Tizim kutubxonalarini o‘rnatish
RUN apt-get update && apt-get install -y --no-install-recommends libssl-dev && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Xavfsiz foydalanuvchi yaratish
RUN addgroup --system --gid 1001 appgroup && \
    adduser --system --uid 1001 --gid 1001 appuser

# Ishchi katalog
WORKDIR /app

# Build qilingan fayllarni nusxalash
COPY --from=builder /app /app

# Xavfsizlik foydalanuvchisini belgilash
USER appuser

# Portni ochish
EXPOSE 8000

# Uvicornni ishga tushirish
CMD ["poetry", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
