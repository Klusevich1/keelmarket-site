import React, {createContext, useEffect, useState, ReactNode} from "react";

interface AppContextType {
    modalOpen: boolean;
    setModalOpen: (modalOpen: boolean) => void;
    toggleModal: () => void;
}

interface AppContextProviderProps {
    children: ReactNode;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

const AppContextProvider:React.FC<AppContextProviderProps> = ({children}: {children: any}) => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    };

    return (
        <AppContext.Provider
            value={{
                modalOpen,
                setModalOpen,
                toggleModal
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;