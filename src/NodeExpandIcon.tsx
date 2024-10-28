import React, {FC} from 'react';

export interface NodeExpandIconProps {
  expanded: boolean;
  onClick: (e: React.MouseEvent<Element>) => void;
}

export const NodeExpandIcon: FC<NodeExpandIconProps> = (props) => {

  const {expanded, onClick} = props;

  const iconClasses = `rts-node-expand-icon${expanded ? ' expanded' : ''}`;

  return (
    <div className="rts-node-expand-icon-container" onClick={onClick}>
      <svg className={iconClasses} viewBox="0 0 320 512">
        <path
          d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/>
      </svg>
    </div>
  );
};
