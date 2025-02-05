# Next 15 starter (with: eslint / typescript / tailwind)
(Next 15 next eslint typescript tailwind starter project)

Для запуска минуя Docker, читайте README.md в каталоге (app/README.md)

## Запуск
### Скопировать файл шаблона пеерменных окружения и указать в новом файле порты
```bash
cp .env.example .env
```
### Установка зависимостей и билд
```bash
docker-compose -f install.yaml up
```
### Development
```bash
docker-compose -f docker-compose.dev.yaml up
```
### Production
```bash
docker-compose -f docker-compose.yaml up -d
```