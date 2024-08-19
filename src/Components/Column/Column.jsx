function Column ({columnInfo}) {
    const { title, image, year, content } = columnInfo;

function Content (currentContent) {
    return currentContent.map((paragraph) => <p>{paragraph}</p>);
}

    return (
    <div className="column">
    <img src={image} />
    <h1>{title}</h1>
    <h2>{year}</h2>
    {Content(content)}
    </div>
  );
}

export default Column;