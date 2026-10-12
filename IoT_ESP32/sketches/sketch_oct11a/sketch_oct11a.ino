// Paso 2: LED parpadeante
const int PIN_LED = 2;   // LED azul integrado del DevKit

void setup() {
  pinMode(PIN_LED, OUTPUT);        // el pin será una salida
  Serial.begin(115200);            // inicia el "chat" con el PC
  Serial.println("Hola, soy tu ESP32!");
}

void loop() {
  digitalWrite(PIN_LED, HIGH);     // enciende
  Serial.println("LED encendido");
  delay(1000);                     // espera 1 segundo
  digitalWrite(PIN_LED, LOW);      // apaga
  Serial.println("LED apagado");
  delay(1000);
}