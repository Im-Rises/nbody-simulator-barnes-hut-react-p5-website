import {useState} from 'react'
import './App.scss'
import {NbodySimulatorBarnesHut, Color} from "nbody-simulator-react-barnes-hut-react-p5";

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
                    <input type={'number'} name={'input-particles-count'} value={count} min={1} onChange={(e) => {
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
                    <input type={'number'} name={'input-particle-mass'} value={particleMass} min={1} onChange={(e) => {
                        if (e.target.value === '' || parseInt(e.target.value) < 1) {
                            setParticleMass(parseInt("1"));
                            return;
                        }
                        setParticleMass(parseInt(e.target.value))
                    }}/>
                </div>
                <div>
                    <label htmlFor={'input-max-depth'}>Max depth : </label>
                    <input type={'number'} name={'input-max-depth'} value={maxDepth} min={1} onChange={(e) => {
                        if (e.target.value === '' || parseInt(e.target.value) < 1) {
                            setMaxDepth(parseInt("1"));
                            return;
                        }
                        setMaxDepth(parseInt(e.target.value))
                    }}/>
                </div>
                <div>
                    <label htmlFor={'input-softening'}>Softening : </label>
                    <input type={'number'} name={'input-softening'} value={softening} min={1} onChange={(e) => {
                        if (e.target.value === '' || parseInt(e.target.value) < 1) {
                            setSoftening(parseInt("1"));
                            return;
                        }
                        setSoftening(parseInt(e.target.value))
                    }}/>
                </div>
                <div>
                    <label htmlFor={'input-capacity'}>Capacity : </label>
                    <input type={'number'} name={'input-capacity'} value={capacity} min={1} onChange={(e) => {
                        if (e.target.value === '' || parseInt(e.target.value) < 1) {
                            setCapacity(parseInt("1"));
                            return;
                        }
                        setCapacity(parseInt(e.target.value))
                    }}/>
                </div>
                <div>
                    <label htmlFor={'input-theta'}>Theta : </label>
                    <input type={'number'} name={'input-theta'} value={theta} min={1} onChange={(e) => {
                        if (e.target.value === '' || parseInt(e.target.value) < 1) {
                            setTheta(parseInt("1"));
                            return;
                        }
                        setTheta(parseInt(e.target.value))
                    }}/>
                </div>
                <div>
                    <label htmlFor={'input-g'}>G : </label>
                    <input type={'number'} name={'input-g'} value={G} min={1} onChange={(e) => {
                        if (e.target.value === '' || parseInt(e.target.value) < 1) {
                            setG(parseInt("1"));
                            return;
                        }
                        setG(parseInt(e.target.value))
                    }}/>
                </div>
                <div>
                    <label htmlFor={'input-show-quadtree'}>Show quadtree : </label>
                    <input type={'checkbox'} name={'input-show-quadtree'} checked={showQuadtree}
                           onChange={(e) => setShowQuadtree(e.target.checked)}/>
                </div>
            </div>
        </div>
    )
}

export default App
