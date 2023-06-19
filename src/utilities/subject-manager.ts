import { Subject } from 'rxjs'

export class SubjectManager {
  private subject = new Subject<boolean>()

  public getSubject () {
    return this.subject.asObservable()
  }

  public setSubject (value:boolean) {
    this.subject.next(value)
  }
}
