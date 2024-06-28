type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type TopType = Pick<AllType, 'name' | 'color'>;
type bottomType = Pick<AllType, 'position' | 'weight'>;
  
function compare(top: TopType, bottom: bottomType): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
