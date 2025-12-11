import json
import os
from collections import Counter

BOOKINGS_FILE = 'bookings.json'

def generate_report():
    """
    Читает файл bookings.json и выводит в консоль простой отчет.
    """
    # 1. Проверяем, существует ли файл
    if not os.path.exists(BOOKINGS_FILE):
        print(f"Файл '{BOOKINGS_FILE}' не найден. Сначала создайте несколько заявок на сайте.")
        return

    # 2. Читаем данные из файла
    try:
        with open(BOOKINGS_FILE, 'r', encoding='utf-8') as f:
            bookings = json.load(f)
    except (json.JSONDecodeError, IOError) as e:
        print(f"Ошибка при чтении файла '{BOOKINGS_FILE}': {e}")
        return

    if not bookings:
        print("В файле нет записей о бронировании для создания отчета.")
        return

    # 3. Анализируем данные
    total_bookings = len(bookings)
    
    # Находим самый популярный автомобиль
    car_models = [b.get('car', 'Не указано') for b in bookings]
    car_counter = Counter(car_models)
    most_popular_car, count = car_counter.most_common(1)[0] if car_counter else ('Нет данных', 0)

    # 4. Выводим отчет в консоль
    print("--- Отчет по заявкам на тест-драйв ---")
    print(f"Всего заявок: {total_bookings}")
    print("-" * 35)
    print("Статистика по автомобилям:")
    for car, num in car_counter.items():
        print(f"- {car}: {num} заявок")
    print(f"\nСамый популярный автомобиль: {most_popular_car} ({count} заявок)")
    print("--- Конец отчета ---")

if __name__ == '__main__':
    generate_report()