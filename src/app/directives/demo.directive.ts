import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: "[appDemo]"
})
export class DemoDirective {
    
    @HostBinding("style.color")
    isHover = "green";

    @HostListener("mouseenter")
    toggleHover() {
        this.isHover = "blue";
    }

    @HostListener("mouseleave")
    toggleL() {
        this.isHover = "green";
    }  

}