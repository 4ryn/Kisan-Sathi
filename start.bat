@echo off
start cmd /k "cd path\to\react\app && npm start"
start cmd /k "cd path\to\crop\app && streamlit run app.py --server.port 8501"
start cmd /k "cd path\to\fertilizer\app && streamlit run app.py --server.port 8502"
start cmd /k "cd path\to\rainfall\app && streamlit run app.py --server.port 8504"
start cmd /k "cd path\to\water\app && streamlit run app.py --server.port 8505"