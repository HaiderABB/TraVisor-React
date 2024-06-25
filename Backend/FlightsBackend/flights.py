from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/flights', methods=['GET'])
def get_flights():
    return jsonify({'flights': 'Flight data'})

if __name__ == '__main__':
    app.run(debug=True)
