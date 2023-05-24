import { useSelector } from 'react-redux';


function PublicationCard() {
  const publications = useSelector(state => state.publications);

  return (
    <div className="container">
      <div className="card">
        <div className="row">
          <div className="col-4">
            <div className="panel">
              <div className="panel panel-header">Název publikace</div>
            </div>
          </div>
          <div className="col-4">
            <div className="panel">
              <div className="panel panel-header">Autoři</div>
            </div>
          </div>
          <div className="col-4">
            <div className="panel">
              <div className="panel panel-header">Informace o publikaci</div>
            </div>
          </div>
        </div>
        <hr />
        {publications.map((publication) => (
          <div className="row" key={publication.id}>
            <div className="col-4">
              <div className="d-flex justify-content-center">
                <h5>
                  {publication.name}
                </h5>
              </div>
            </div>
            <div className="col-4">
              {publication.authors.map((author) => (
                <div className="panel" key={author.id}>
                  <h5>{author.user.name} {author.user.surname}</h5>
                  <p>Email: {author.user.email}</p>
                  <p>Podíl: {author.share}</p>
                </div>
              ))}
            </div>
            <div className="col-4">
              <div className="panel">
                <p>Datum zveřejnění: {publication.publishedDate}</p>
                <p>Článek: {publication.publicationtype.name}</p>
                <p>Poslední změna: {publication.lastchange}</p>
              </div>
            </div>
          </div>
        ))}
        <hr />
        <div className="row">
          <div className="btn-group">
            <button type="button" className="btn btn-info" >Přidat uživatele</button>
            <button type="button" className="btn btn-info" disabled>Přepočet podílu na publikaci</button>
            <button type="button" className="btn btn-info" disabled>Změna podíli na publikaci</button>
            <button type="button" className="btn btn-info" disabled>Změna pořadí autora</button>
            <button type="button" className="btn btn-info" disabled>Přiřazení publikace ke předmětu</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PublicationCard;