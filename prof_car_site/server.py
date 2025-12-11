from flask import Flask, jsonify, request, send_from_directory
import json, os, random
app = Flask(__name__, static_folder='.', static_url_path='')

BOOKINGS_FILE = 'bookings.json'

def load_bookings():
  if os.path.exists(BOOKINGS_FILE):
    with open(BOOKINGS_FILE,'r',encoding='utf-8') as f:
      try:
        return json.load(f)
      except:
        return []
  return []

def save_bookings(b):
  with open(BOOKINGS_FILE,'w',encoding='utf-8') as f:
    json.dump(b,f,ensure_ascii=False,indent=2)

@app.route('/api/bookings', methods=['GET'])
def api_get_bookings():
  return jsonify(load_bookings())

@app.route('/api/bookings', methods=['POST'])
def api_post_booking():
  data = request.get_json()
  if not data:
    return jsonify({'error':'No data'}),400
  
  # Basic validation for required fields
  required_fields = ['carName', 'customerName', 'customerPhone', 'bookingDate']
  if not all(field in data for field in required_fields):
    return jsonify({'error': 'Missing required fields'}), 400

  bookings = load_bookings()
  bookings.append(data)
  save_bookings(bookings)
  return jsonify({'status':'ok'}),201

@app.route('/ask', methods=['POST'])
def ask_bot():
    data = request.get_json()
    if not data or 'prompt' not in data:
        return jsonify({"error": "No prompt provided"}), 400

    user_prompt = data.get('prompt', '').lower()

    # More diverse, keyword-based responses
    GREETINGS = ["Здравствуйте! Чем могу помочь?", "Добрый день! Слушаю вас.", "Привет! Какой у вас вопрос?"]
    PRICING = [
        "Цены на все автомобили указаны в нашем каталоге. Вы можете также связаться с менеджером для получения персонального предложения.",
        "Стоимость зависит от модели и комплектации. Посмотрите наш каталог или оставьте заявку, и мы подберем для вас лучший вариант."
    ]
    TEST_DRIVE = [
        "Записаться на тест-драйв очень просто! Вы можете использовать форму на главной странице или на странице понравившегося автомобиля.",
        "Конечно, вы можете протестировать любой автомобиль. Просто заполните форму записи на тест-драйв."
    ]
    CONTACTS = [
        "Наши контактные данные, адрес и карта проезда находятся на странице 'Байланыс'.",
        "Вы можете найти нас по адресу, указанному на странице контактов. Ждем вас в гости!"
    ]
    CREDIT = [
        "Да, мы предлагаем выгодные условия кредитования от банков-партнеров. Вы можете подать предварительную заявку у нас в салоне.",
        "Мы сотрудничаем с несколькими банками для предоставления лучших кредитных программ. Свяжитесь с нашим кредитным специалистом для подробностей."
    ]
    DEFAULT = [
        "Спасибо за ваш вопрос! Наш менеджер скоро свяжется с вами для уточнения деталей.",
        "Интересный вопрос! Я передам его специалисту, и мы вернемся с ответом в ближайшее время.",
        "Я пока только учусь, но я записал ваш вопрос и передал его человеку. Мы скоро ответим!",
        "Чтобы получить точный ответ, пожалуйста, оставьте свой номер телефона, и наш консультант перезвонит вам."
    ]

    if any(word in user_prompt for word in ['привет', 'здравствуй', 'добрый день']):
        response_text = random.choice(GREETINGS)
    elif any(word in user_prompt for word in ['цена', 'стоимость', 'сколько стоит']):
        response_text = random.choice(PRICING)
    elif 'тест-драйв' in user_prompt:
        response_text = random.choice(TEST_DRIVE)
    elif any(word in user_prompt for word in ['контакты', 'адрес', 'где вы']):
        response_text = random.choice(CONTACTS)
    elif any(word in user_prompt for word in ['кредит', 'рассрочк']):
        response_text = random.choice(CREDIT)
    else:
        response_text = random.choice(DEFAULT)

    return jsonify({"response": response_text})

@app.route('/')
def index():
  return send_from_directory('.', 'index.html')

if __name__ == '__main__':
  app.run(debug=True, port=5000)
