import PropTypes from 'prop-types'

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

Column.propTypes = {
    columnInfo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        content: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
}

export default Column;