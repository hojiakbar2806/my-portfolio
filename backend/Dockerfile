FROM python:3.12-slim as python-base

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY pyproject.toml poetry.lock* ./

RUN pip install poetry && poetry config virtualenvs.create false && poetry install --no-root

COPY . .

EXPOSE 8000

CMD ["poetry", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
