FROM python:3.10-slim as builder

WORKDIR /app

COPY . /app

RUN pip install --no-cache-dir -r requirements.txt

FROM python:3.10-slim

WORKDIR /app
COPY --from=builder /app /app

CMD ["python", "app.py"]
