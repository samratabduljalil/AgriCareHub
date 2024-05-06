from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:5173",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.get("/ping")
async def ping():
    return "Hello, I am alive"

def read_file_as_image(data, target_size=(224, 224)) -> np.ndarray:
    image = Image.open(BytesIO(data))
    image = image.resize(target_size)  # Resize the image
    image = np.array(image)
    return image

@app.post("/predictCorn")
async def predict(
    file: UploadFile = File(...)
):
    MODEL = tf.keras.models.load_model("corn_model_inception_final.h5")

    CLASS_NAMES = ["Common Rust","Gray Leaf Spot", "Healthy" , "Northern Leaf Blight"]
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)
    img_batch=img_batch/255
    predictions = MODEL.predict(img_batch)

    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    print(predicted_class)
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }


@app.post("/predictRice")
async def predict(
    file: UploadFile = File(...)
):
    MODEL = tf.keras.models.load_model("corn_model_inception_final.h5")

    CLASS_NAMES = ["Healthy","Leaf Blast", "Neck Blast"]
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)
    img_batch=img_batch/255
    predictions = MODEL.predict(img_batch)

    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    print(predicted_class)
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }




@app.post("/predictWheat")
async def predict(
    file: UploadFile = File(...)
):
    MODEL = tf.keras.models.load_model("wheat_model_inception_final.h5")

    CLASS_NAMES = ["Brown Rust","Healthy", "Yellow Rust" ]
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)
    img_batch=img_batch/255
    predictions = MODEL.predict(img_batch)

    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    print(predicted_class)
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }




@app.post("/predictPotato")
async def predict(
    file: UploadFile = File(...)
):
    MODEL = tf.keras.models.load_model("Potato_model_inception_final (2).h5")

    CLASS_NAMES = ["Early Blight","Healthy", "Late Blight" ]
    image = read_file_as_image(await file.read())
    img_batch = np.expand_dims(image, 0)
    img_batch=img_batch/255
    predictions = MODEL.predict(img_batch)

    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])
    print(predicted_class)
    return {
        'class': predicted_class,
        'confidence': float(confidence)
    }





if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)
