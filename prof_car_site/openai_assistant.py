import openai
import os
import tkinter as tk
from tkinter import simpledialog, messagebox

# ваш API-ключ OpenAI
openai.api_key = os.getenv("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")  # Рекомендуется хранить ключ в переменной окружения

def ask_openai(prompt, model="gpt-4", max_tokens=100):
    """
    Отправляет запрос к OpenAI API и возвращает ответ.
    
    :param prompt: Вопрос или запрос к модели.
    :param model: Модель OpenAI (например, "gpt-4" или "gpt-3.5-turbo").
    :param max_tokens: Максимальное количество токенов в ответе.
    :return: Ответ модели.
    """
    try:
        response = openai.ChatCompletion.create(
            model=model,
            messages=[{"role": "user", "content": prompt}],
            max_tokens=max_tokens,
            temperature=0.7
        )
        return response['choices'][0]['message']['content']
    except Exception as e:
        return f"Ошибка: {e}"

def on_help_button_click():
    """
    Обработчик нажатия кнопки "Помощь".
    Открывает диалог для ввода запроса и отображает ответ.
    """
    user_prompt = simpledialog.askstring("Чат-бот", "Введите ваш запрос:")
    if user_prompt:
        response = ask_openai(user_prompt)
        messagebox.showinfo("Ответ от OpenAI", response)

# Создание основного окна
root = tk.Tk()
root.title("Помощь с Чат-ботом")

# Добавление кнопки
help_button = tk.Button(root, text="Помощь", command=on_help_button_click, width=20, height=2)
help_button.pack(pady=20)

# Запуск приложения
root.mainloop()