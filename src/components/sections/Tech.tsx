import { SectionWrapper } from "../../hoc";
import FlowingMenu from "../atoms/FlowingMenu";

const Tech = () => {
  const demoItems = [
    { link: '', text: 'React', image: '/gif/react.gif' },
    { link: '', text: 'Git', image: '/gif/git.gif' },
    { link: '', text: 'Flutter', image: '/gif/flutter.gif' },
    { link: '', text: 'Web', image: '/gif/web.gif' },
  ];
  return (

    <div style={{ height: '600px', position: 'relative' }}>
      <FlowingMenu items={demoItems} />
      {/* <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="h-28 w-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div> */}
    </div>


  );
};

export default SectionWrapper(Tech, "tech");
