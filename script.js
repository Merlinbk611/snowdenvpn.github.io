async function getConfig() {
    const uuid = document.getElementById('uuid').value;
    if (!uuid) {
        alert("Введите UUID!");
        return;
    }

    const response = await fetch(`https://your-worker-name.cloudflare.workers.dev/?uuid=${uuid}`);
    const config = await response.json();

    // Создаём ссылку для скачивания
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `config_${uuid}.json`;
    a.click();
    document.getElementById('result').innerHTML = "Конфиг скачан!";
}
