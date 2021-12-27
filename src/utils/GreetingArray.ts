export default class GreetingArray {

  resultArray: any[] = []
  traversed: Set<number> = new Set<number>()

  constructor () {

  }

  rearrangeComments (comments: any[]) {
    // form rooted comments
    const rootedComments: any[] = this.formRootedComments(comments)
    
    // sort comments

    // this.resultArray.sort(this.compareComment)
    // this.resultArray.forEach(element => {
    //   if (element.children) element.children.sort(this.compareComment)
    // })
    // console.log(rootedComments.length)
    return rootedComments
    // return this.sortComments(rootedComments)
  }

  // form rooted comment
  formRootedComments (comments: any[], targetRoot: number = 0): any[] {
    if (comments.length == 0) return []
    const resultArr: any[] = []
    const traversed: Set<number> = new Set<number>()
    comments.forEach(c => {
      // console.log('it is root ', c.root, '  target: ', targetRoot)
      if (c.root == targetRoot) {
        resultArr.push(c)
        traversed.add(c.id)
      }
    })
    // for (let i of resultArr) {
    //   console.log(i.dataValues)
    // }
    const reducedComments = comments.filter(c => !traversed.has(c.id))
    // console.log('traversed,  ', resultArr)
    resultArr.forEach(c => {
      c.dataValues.children = this.formRootedComments(reducedComments, c.id)
    })
    resultArr.sort(this.compareComment)
    return resultArr
  }

  sortComments (comments: any[]) {
    comments.sort(this.compareComment)
    comments.forEach(c => {
      if(c.children?.length > 0) this.sortComments(c.children)
    })
    return comments
  }

  removeElement (arr: any[], index: number): any[] {
    if (index < 0 || index > arr.length - 1) return arr
    return arr.slice(0, index).concat(arr.slice(index + 1))
  }

  compareComment (a: any, b: any) {
    // if (a.likes + a.commentsCount < b.likes + b.commentsCount) return -1
    // else if (a.likes + a.commentsCount > b.likes + b.commentsCount) return 1
    return a.uploadedAt - b.uploadedAt
  }

}