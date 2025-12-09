from flask import Flask, jsonify, request, send_from_directory
import json, os
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

@app.route('/')
def index():
  return send_from_directory('.', 'index.html')

if __name__ == '__main__':
  app.run(debug=True, port=5000)
