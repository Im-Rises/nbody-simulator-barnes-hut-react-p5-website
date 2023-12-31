import {useState} from 'react'
import './App.scss'
import {NbodySimulatorBarnesHut, Color} from "nbody-simulator-barnes-hut-react-p5";
import GitHubProjectPanel from "./components/GitHubProjectPanel.jsx";
import {AUTHOR, GITHUB_LINK} from "./constants/project-constants.js";

function App() {
    const [count, setCount] = useState(1000);
    const [maxDepth, setMaxDepth] = useState(1000);
    const [theta, setTheta] = useState(1);
    const [G, setG] = useState(1);
    const [softening, setSoftening] = useState(100);
    const [capacity, setCapacity] = useState(1);
    const [particleMass, setParticleMass] = useState(1);
    const [showQuadtree, setShowQuadtree] = useState(false);

    return (
        <div className={'app-panel'}>
            <GitHubProjectPanel link={GITHUB_LINK} author={AUTHOR}/>
            <h1 className={'title-app'}>Barnes-Hut N-Body simulation</h1>
            <div className={'nbody-simulator-canvas-holder'}>
                <NbodySimulatorBarnesHut particlesCount={count} widthHeight={500} showQuadtree={showQuadtree}
                                         maxDepth={maxDepth}
                                         theta={theta} G={G} softening={softening} capacity={capacity}
                                         particleMass={particleMass}
                                         backgroundColor={new Color(100, 100, 100)}
                                         divStyle={"width:100%; height:50vh; align-items:center; justify-content:center; display:flex;"}
                                         canvasStyle={"object-fit:contain; max-width:90%; max-height:90%;"}
                />
            </div>
            <div className={'input-simulation-holder'}>
                <div>
                    <label htmlFor={'input-particles-count'}>Particles count : </label>
                    <input type={'number'} id={'input-particles-count'} value={count} min={1} onChange={(e) => {
                        if (e.target.value === '' || parseInt(e.target.value) < 1) {
                            setCount(parseInt("1"));
                            return;
                        }
                        setCount(parseInt(e.target.value))
                    }
                    }/>
                </div>
                <div>
                    <label htmlFor={'input-particle-mass'}>Particle mass : </label>
                    <input type={'number'} id={'input-particle-mass'} value={particleMass} min={0.01} onChange={(e) => {
                        if (e.target.value === '' || parseInt(e.target.value) < 0.01) {
                            setParticleMass(parseInt("1"));
                            return;
                        }
                        setParticleMass(parseInt(e.target.value))
                    }}/>
                </div>
                <div>
                    <label htmlFor={'input-max-depth'}>Max depth : </label>
                    <input type={'number'} id={'input-max-depth'} value={maxDepth} min={1} onChange={(e) => {
                        if (e.target.value === '' || parseInt(e.target.value) < 1) {
                            setMaxDepth(parseInt("1"));
                            return;
                        }
                        setMaxDepth(parseInt(e.target.value))
                    }}/>
                </div>
                <div>
                    <label htmlFor={'input-softening'}>Softening : </label>
                    <input type={'number'} id={'input-softening'} value={softening} onChange={(e) => {
                        if (e.target.value === '' || parseInt(e.target.value) === 0) {
                            setSoftening(parseInt("1"));
                            return;
                        }
                        setSoftening(parseInt(e.target.value))
                    }}/>
                </div>
                <div>
                    <label htmlFor={'input-capacity'}>Capacity : </label>
                    <input type={'number'} id={'input-capacity'} value={capacity} min={1} onChange={(e) => {
                        if (e.target.value === '' || parseInt(e.target.value) < 1) {
                            setCapacity(parseInt("1"));
                            return;
                        }
                        setCapacity(parseInt(e.target.value))
                    }}/>
                </div>
                <div>
                    <label htmlFor={'input-theta'}>Theta : </label>
                    <input type={'number'} id={'input-theta'} value={theta} min={0} max={1} onChange={(e) => {
                        if (e.target.value === '' || parseInt(e.target.value) < 0) {
                            setTheta(parseInt("0"));
                            return;
                        }
                        setTheta(parseInt(e.target.value))
                    }}/>
                </div>
                <div>
                    <label htmlFor={'input-g'}>G : </label>
                    <input type={'number'} id={'input-g'} value={G} onChange={(e) => {
                        if (e.target.value === '') {
                            setG(parseInt("1"));
                            return;
                        }
                        setG(parseInt(e.target.value))
                    }}/>
                </div>
                <div>
                    <label htmlFor={'input-show-quadtree'}>Show quadtree : </label>
                    <input type={'checkbox'} id={'input-show-quadtree'} checked={showQuadtree}
                           onChange={(e) => setShowQuadtree(e.target.checked)}/>
                </div>
            </div>
        </div>
    )
}

export default App
