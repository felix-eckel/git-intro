var line;
line = document.getElementById("version-text");
line.addEventListener("click", versionJoke);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function versionJoke() {
    var text
    text = document.getElementById("version-text");
    if (text.textContent != "Project.py") {
        text.textContent = "Project.py";
        await sleep(500);
    }
    await deleteChars(text, 3);
    await sleep(200);
    await addChars(text, "2.py")
    await sleep(500);
    await deleteChars(text, 3);
    await sleep(200);
    await addChars(text, "_final.py");
    await sleep(750);
    await deleteChars(text, 6);
    await sleep(200);
    await addChars(text, "inal.py");
    await sleep(1000);
    await deleteChars(text, 3);
    await sleep(200);
    await addChars(text, "_nowforreal.py");
    await sleep(3000);
    await deleteChars(text, 3);
    await sleep(200);
    await addChars(text, "2.py");
}

async function deleteChars(text, no) {
    for (var i=0; i<no; i++) {
        text.textContent = text.textContent.slice(0, text.textContent.length - 1);
        await sleep(50);
    }
}

async function addChars(text, append) {
    for (var i=0; i<append.length; i++) {
        text.textContent = text.textContent + append.slice(i, i+1);
        await sleep(50);
    }
}

tooltipSource1 = document.getElementById("tooltip-source-1")
tooltipSource1.addEventListener("mouseover", function() {
    box = document.getElementById("tooltip-box-1")
    box.style.visibility="visible";
    box.style.opacity=0.95;
})
tooltipSource1.addEventListener("mouseout", function() {
    box = document.getElementById("tooltip-box-1")
    box.style.visibility="hidden";
    box.style.opacity=0;
})
tooltipSource2 = document.getElementById("tooltip-source-2")
tooltipSource2.addEventListener("mouseover", function() {
    box = document.getElementById("tooltip-box-2")
    box.style.visibility="visible";
    box.style.opacity=0.95;
})
tooltipSource2.addEventListener("mouseout", function() {
    box = document.getElementById("tooltip-box-2")
    box.style.visibility="hidden";
    box.style.opacity=0;
})
tooltipSource3 = document.getElementById("tooltip-source-3")
tooltipSource3.addEventListener("mouseover", function() {
    box = document.getElementById("tooltip-box-3")
    box.style.visibility="visible";
    box.style.opacity=0.95;
})
tooltipSource3.addEventListener("mouseout", function() {
    box = document.getElementById("tooltip-box-3")
    box.style.visibility="hidden";
    box.style.opacity=0;
})
hiddenSource1 = document.getElementById("img-trigger1")
hiddenSource1.addEventListener("mouseover", function() {
    box = document.getElementById("hidden-more")
    box.style.visibility="visible";
    box.style.opacity=0.95;
})
hiddenSource1.addEventListener("mouseout", function() {
    box = document.getElementById("hidden-more")
    box.style.visibility="hidden";
    box.style.opacity=0;
})