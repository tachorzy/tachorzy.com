import { useState } from 'react'
import { Switch } from '@headlessui/react'

const LightModeToggle = () => {
    const [lightModeEnabled, setLightModeEnabled] = useState(false);

    return(
        <div>
            <Switch
                checked={lightModeEnabled}
                onChange={setLightModeEnabled}
                className={`${lightModeEnabled ? 'bg-mudbrick' : 'bg-dusty'} relative inline-flex h-8 w-24 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
                <span className="sr-only">Light mode enabled</span>
                <span
                    className={`${lightModeEnabled ? 'translate-x-16 bg-dune' : 'translate-x-18 bg-alabaster'} pointer-events-none inline-block h-[1.8rem] w-[1.8rem] transform rounded-full bg-alabaster ring-0 transition duration-200 ease-in-out`}
                >

                </span>
            </Switch>
        </div>
    )

}

export default LightModeToggle;