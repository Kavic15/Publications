function PublicationTable(props) {
    const data = [
      {
        name: "Transmutace materiálu",
        autor: "Pavel Chloupek",
        link: "https://www.w3schools.com/js/js_objects.asp"
      },
      {
        name: "Pevnost materiálu",
        autor: "Tomáš Kocourek",
        link: "https://www.w3schools.com/js/js_objects.asp"
      }
    ];
  
    return (
      <div>
        <table className="table table-bordered table-hover table-primary">
          <thead>
            <tr>
              <th>Publikace</th>
              <th>Autor</th>
              <th>Link</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.autor}</td>
                <td>
                  <a href={item.link}>Link</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default PublicationTable;