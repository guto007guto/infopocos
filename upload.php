<?php
// Verifica se o formulário foi enviado
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Verifica se há um arquivo e a pasta destino
    if (isset($_FILES['arquivo']) && isset($_POST['pasta'])) {
        $arquivo = $_FILES['arquivo'];
        $pasta = basename($_POST['pasta']); // sanitiza a entrada
        $diretorio = __DIR__ . "/pastas/$pasta";

        // Cria a pasta se não existir
        if (!is_dir($diretorio)) {
            mkdir($diretorio, 0755, true);
        }

        // Caminho final do arquivo
        $destino = $diretorio . '/' . basename($arquivo['name']);

        // Move o arquivo enviado para o destino
        if (move_uploaded_file($arquivo['tmp_name'], $destino)) {
            echo "Arquivo enviado com sucesso!";
        } else {
            echo "Erro ao enviar o arquivo.";
        }
    } else {
        echo "Arquivo ou pasta não especificados.";
    }
} else {
    echo "Método inválido.";
}
?>
