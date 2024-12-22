from http.server import SimpleHTTPRequestHandler, HTTPServer
import os

# Configuration
HOST = 'localhost'
PORT = 8000

# Automatically detect the directory of the script
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class CustomHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

# Start the server
with HTTPServer((HOST, PORT), CustomHandler) as server:
    print(f"Serving HTTP on {HOST}:{PORT} from {DIRECTORY}")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nServer stopped.")