import PropTypes from 'prop-types'

function Column ({columnInfo}) {
    const { title, image, imageAlt, year, content } = columnInfo;

function Content (currentContent) {
    return currentContent.map((paragraph, i) => <p key={i}>{paragraph}</p>);
}

    return (
    <div className="column">
    <img src={image} alt={imageAlt} />
    <h3 className="title">{title}</h3>
    <p className="subtitle year">{year}</p>
    {Content(content)}
    </div>
  );
}

Column.propTypes = {
    columnInfo: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        imageAlt: PropTypes.string.isRequired,
        year: PropTypes.string.isRequired,
        content: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
}

export default Column;