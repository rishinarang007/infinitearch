import 'reflect-metadata'
import { injectable, inject } from 'inversify'
import TreeModel from 'tree-model'
import { AuthenticationRepository } from '../Authentication/AuthenticationRepository'

@injectable()
export class NavigationTree {
  @inject(AuthenticationRepository)
  authenticationRepository

  getTree() {
    let tree = new TreeModel()

    let root = tree.parse({
      id: 'homeLink',
      type: 'root',
      text: 'Home',
      children: [
        {
          id: 'booksExpand',
          type: 'expand',
          text: 'Books',
          children: [
            {
              id: 'booksLink',
              type: 'link',
              text: 'Books',
              children: [
                {
                  id: 'addBooksLink',
                  type: 'link',
                  text: 'Add Book'
                }
              ]
            },
            {
              id: 'addBooksLink',
              type: 'link',
              text: 'Add Book'
            }
          ]
        },
        {
          id: 'authorsExpand',
          type: 'expand',
          text: 'Authors',
          children: [
            {
              id: 'authorsLink',
              type: 'link',
              text: 'Authors',
              children: [
                {
                  id: 'addAuthorsLink',
                  type: 'link',
                  text: 'Add Author'
                },
                {
                  id: 'authorPolicyLink',
                  type: 'link',
                  text: 'Author Policy'
                },
                {
                  id: 'mapLink',
                  type: 'link',
                  text: 'View Map'
                }
              ]
            },
            {
              id: 'addAuthorsLink',
              type: 'link',
              text: 'Add Author',
              children: [
                {
                  id: 'mapLink',
                  type: 'link',
                  text: 'View Map'
                }
              ]
            },
            {
              id: 'authorPolicyLink',
              type: 'link',
              text: 'Author Policy'
            }
          ]
        }
      ]
    })

    return root
  }
}
