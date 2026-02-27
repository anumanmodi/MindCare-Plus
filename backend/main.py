from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend connection (IMPORTANT)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextInput(BaseModel):
    text: str

@app.get("/")
def home():
    return {"message": "MindCare+ Backend Running 🚀"}

@app.post("/analyze")
def analyze(data: TextInput):
    # Dummy logic for now
    text = data.text.lower()

    if "sad" in text or "depressed" in text:
        emotion = "Sad"
        risk_score = 75
    elif "happy" in text:
        emotion = "Happy"
        risk_score = 10
    else:
        emotion = "Neutral"
        risk_score = 30

    return {
        "emotion": emotion,
        "risk_score": risk_score
    }