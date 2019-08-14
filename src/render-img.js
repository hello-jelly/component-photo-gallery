function renderImage(exampleImage) {
    return `<li class="card">
    <div>
        <h2>${exampleImage.title}</h2>                                
        <p>Horns: ${exampleImage.horns}</p>
    </div>
    <div class="img-contain" title="${exampleImage.description}">
            <img src="${exampleImage.url}"  alt="${exampleImage.description}">
    </div>
</li>`;
}

export default renderImage;