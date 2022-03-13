const LinkItem = ({ page, setActivePage }) => {
  return (
    <a className="paginator-item" href="#" onClick={(evt) => {
      evt.preventDefault()
      setActivePage(page)
    }}>
      {page}
    </a>
  )
}

const Pagination = ({
  activePage,
  setActivePage,
  pages
}) => {
  return (
    <div className="section-bottom">
      <div className="paginator">
        <a className="paginator-item" href="#" onClick={(evt) => {
          evt.preventDefault()
          if (activePage <= 1) return
          setActivePage(activePage - 1)
        }}>
          <i className="fas fa-chevron-left" />
        </a>
        {activePage > 2 && <LinkItem page={1} setActivePage={setActivePage} />}
        {activePage > 3 && <span className="paginator-item">...</span>}
        {activePage > 1 && <LinkItem page={activePage - 1} setActivePage={setActivePage} />}
        <span className="active paginator-item">{activePage}</span>
        {(activePage < (pages)) && <LinkItem page={activePage + 1} setActivePage={setActivePage} />}
        {(activePage < (pages - 2)) && <span className="paginator-item">...</span>}
        {(activePage < (pages - 1)) && <LinkItem page={pages} setActivePage={setActivePage} />}
        <a className="paginator-item" href="#" onClick={(evt) => {
          evt.preventDefault()
          if (activePage >= pages) return
          setActivePage(activePage + 1)
        }}>
          <i className="fas fa-chevron-right" />
        </a>
      </div>
    </div >
  )
}

export default Pagination;