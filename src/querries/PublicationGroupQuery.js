import { authorizedFetch } from '../querries/authorizedFetch'

/**
 * Funkce
 *  
 */
export const GroupsSelectQueryJSON = () => ({
    "query":
        `{
          publicationPage {
            id
            name
            lastchange
            publishedDate
            publicationtype {
              id
              name
            }
            authors {
              id
              order
              lastchange
              share
              user {
                id
                name
                surname
                email
                
              }
            }
          }
        }`
})

/**
 * Realizace dotazu na server. Vyuziva autorizedFetch (zapouzdreni)
 */

export const GroupsSelectQuery = () =>
    authorizedFetch('/gql', {
        body: JSON.stringify(GroupsSelectQueryJSON()),
    })