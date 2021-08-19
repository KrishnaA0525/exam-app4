import { AfterViewInit, Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";

@Directive({
	selector: '[appBtnHighlight]'
})
export class BtnHighlightDirective implements OnInit, AfterViewInit {

	constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
	
	isActive: boolean = false;
	isAnswered: boolean = false;
	isReviewLater: boolean = false;
	@Input() set btnActive(active: boolean) {
		this.isActive = active;
		this.highLightBtn(this.isActive, this.isAnswered, this.isReviewLater);
	}

	@Input() set btnAnswered(answered: boolean) {
		this.isAnswered = answered;
		this.highLightBtn(this.isActive, this.isAnswered, this.isReviewLater);
	}

	@Input() set btnReview(review: boolean) {
		this.isReviewLater = review;
		this.highLightBtn(this.isActive, this.isAnswered, this.isReviewLater);
	}

	ngOnInit() {
		this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "");
	}

	ngAfterViewInit() {
		this.highLightBtn(this.isActive, this.isAnswered, this.isReviewLater);
	}

	highLightBtn(isActive: boolean, isAnswered: boolean, isReviewLater: boolean) {
		if (isActive) {
			this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "rgb(240, 215, 182)");
			this.renderer.setStyle(this.elementRef.nativeElement, "border", "1px solid black");
		} else {
			this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "");
			this.renderer.setStyle(this.elementRef.nativeElement, "border", "");
		}
		if(isAnswered && !isReviewLater) {
			this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "rgb(106, 202, 10)");
		}
		if (isReviewLater) {
			this.renderer.setStyle(this.elementRef.nativeElement, "background-color", "orange");
		}
	}
}