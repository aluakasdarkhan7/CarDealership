from flask import Flask, request, jsonify, render_template
import openai
import os

app = Flask(__name__)

# Установите ваш API-ключ OpenAI
openai.api_key = os.getenv("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")  # Рекомендуется хранить ключ в переменной окружения

def ask_openai(prompt, model="gpt-4", max_tokens=100):
    """
    Отправляет запрос к OpenAI API и возвращает ответ.
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

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/ask', methods=['POST'])
def ask():
    data = request.json
    prompt = data.get('prompt', '')
    if not prompt:
        return jsonify({'error': 'Запрос не может быть пустым'}), 400
    response = ask_openai(prompt)
    return jsonify({'response': response})

if __name__ == '__main__':
    app.run(debug=True)