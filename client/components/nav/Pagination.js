const Pagination = () => {
  return (
    <div className="section-bottom">
      <div className="paginator">
        <a className="paginator-item" href="#">
          <i className="fas fa-chevron-left" />
        </a>
        <a className="paginator-item" href="#">
          1
        </a>
        <span className="active paginator-item">2</span>
        <a className="paginator-item" href="#">
          3
        </a>
        <span className="paginator-item">...</span>
        <a className="paginator-item" href="#">
          10
        </a>
        <a className="paginator-item" href="#">
          <i className="fas fa-chevron-right" />
        </a>
      </div>
    </div>
  )
}

export default Pagination;