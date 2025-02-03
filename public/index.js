document.getElementById("analizar").addEventListener("click", async () => {
    const exerciseDescription = document.getElementById("exerciseDescription").value;
    const correctCode = document.getElementById("codigoCorrecto").value;
    const studentCode = document.getElementById("codigoPrueba").value;

    const response = await fetch("/prompt", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            exerciseDescription,
            correctCode,
            studentCode
        })
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let result = "";

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        result += decoder.decode(value, { stream: true });
        console.log(result);
        document.getElementById("respuesta").value = result;
    }
});