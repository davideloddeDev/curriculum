<?php

// Imposta gli headers per accettare richieste cross-origin
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Controlla se la richiesta è di tipo POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  // Recupera i dati dal form
  $nomeAzienda = $_POST['nomeAzienda'];
  $indirizzoEmail = $_POST['indirizzoEmail'];
  $numeroTelefono = $_POST['numeroTelefono'];

  // 1. Convalida i dati
  if (!filter_var($indirizzoEmail, FILTER_VALIDATE_EMAIL)) {
      // Email non valida
      http_response_code(400); // Bad Request
      echo json_encode(['success' => false, 'message' => 'Indirizzo email non valido.']);
      exit;
   }
  // 2. Invia un'email con i dati del form
  $to = 'dalo.apps@gmail.com'; // Sostituisci con il tuo indirizzo email
  $subject = 'Nuovo messaggio dal sito curriculum';
  $message = "Nome azienda: $nomeAzienda\n";
  $message .= "Indirizzo email: $indirizzoEmail\n";
  $message .= "Numero di telefono: $numeroTelefono\n";
  $headers = "From: dalo.apps@gmail.com\r\n"; // Sostituisci con un indirizzo email valido

  if (mail($to, $subject, $message, $headers)) {
    // Email inviata con successo
    echo json_encode(['success' => true, 'message' => 'Dati inviati correttamente!']);
  } else {
    // Errore durante l'invio dell'email
    http_response_code(500); // Internal Server Error
    echo json_encode(['success' => false, 'message' => 'Errore durante l\'invio dell\'email.']);
  }

  // Invia una risposta al client
  echo json_encode(['success' => true, 'message' => 'Dati ricevuti con successo!']);

} else {
  // Metodo di richiesta non valido
  http_response_code(405); // Method Not Allowed
  echo json_encode(['success' => false, 'message' => 'Metodo di richiesta non valido.']);
}

?>
