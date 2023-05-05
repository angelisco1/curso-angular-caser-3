import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cmp03-referencias',
  templateUrl: './cmp03-referencias.component.html',
  styleUrls: ['./cmp03-referencias.component.css']
})
export class Cmp03ReferenciasComponent {

  @ViewChild('videoRef') videoRef: ElementRef<HTMLVideoElement> | null = null
  _currentVolume: number = 0

  // this.currentVolume
  get currentVolume() {
    return this._currentVolume
  }

  // this.currentVolume = ...
  set currentVolume(updatedVolume) {
    this._currentVolume = updatedVolume
    if (this.videoRef) {
      this.videoRef.nativeElement.volume = (this.currentVolume / 100)
    }
  }

  play() {
    this.mute()
    this.videoRef?.nativeElement.play()
  }

  pause() {
    this.videoRef?.nativeElement.pause()
  }

  mute() {
    this.currentVolume = 0
  }

  changeVolume(event: Event) {
    console.log({ event })
    const updatedVolume = (event.target as HTMLInputElement).value
    this.currentVolume = Number(updatedVolume)
  }
}
