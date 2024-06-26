from flask import Flask, jsonify, request

# Create the Flask application instance
app = Flask(__name__)

# Define a route for '/flights' endpoint
@app.route('/flights', methods=['GET'])
def get_flight_data():
    num = request.args.get("num")
    return jsonify({'flights': f'{num} Flight data'})

# Run the application if this script is executed directly
if __name__ == '__main__':
    app.run(debug=True)
