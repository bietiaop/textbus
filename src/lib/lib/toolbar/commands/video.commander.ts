import { Commander, TBSelection } from '../../core/_api';
import { VideoComponent } from '../../components/video.component';

export class VideoCommander implements Commander<Map<string, string | number | boolean>> {
  recordHistory = true;

  command(selection: TBSelection, attrs: Map<string, string | number | boolean>, overlap: boolean): void {
    const fn = function (component: VideoComponent) {
      component.src = attrs.get('src') as string;
      component.autoplay = attrs.get('autoplay') as boolean;
      component.controls = attrs.get('controls') as boolean;
      component.width = attrs.get('width') as string;
      component.height = attrs.get('height') as string;
    }

    selection.ranges.forEach(range => {
      if (range.collapsed) {
        if (overlap) {
          const component = range.commonAncestorFragment.getContentAtIndex(range.startIndex);
          if (component instanceof VideoComponent) {
            fn(component);
          }
        } else {
          range.commonAncestorFragment.insert(
            new VideoComponent(attrs.get('src') as string, !!attrs.get('autoplay'), !!attrs.get('controls')),
            range.startIndex);
        }
      } else {
        range.getSelectedScope().forEach(scope => {
          scope.fragment.sliceContents(scope.startIndex, scope.endIndex).forEach(component => {
            if (component instanceof VideoComponent) {
              fn(component);
            }
          })
        });
      }
    })
  }
}
