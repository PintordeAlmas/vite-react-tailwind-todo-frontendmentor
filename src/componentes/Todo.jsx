import CrossIcon from "./icons/CrossIcons";

const Todo = () => {
    return (
        <>
            <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
                <header className="container mx-auto px-4 pt-8">
                    <div className="flex justify-between">
                        <h1 className="text-3xl font-semibold uppercase tracking-[0.3em] text-white">
                            Todo
                        </h1>
                        <botton>luna</botton>
                    </div>

                    <form className="mt-8 flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4">
                        <span className="inline-block h-5 w-5 rounded-full border-2"></span>
                        <input
                            className="w-full text-gray-400 outline-none"
                            type="text"
                            placeholder="Create a new todo... "
                        />
                    </form>
                </header>
                <main className="container mx-auto mt-8 px-4">
                    <div className="rounded-md bg-white">
                        <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4">
                            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                            <p className="grow text-gray-600">
                                Complete online Javascript curse in bluuweb
                            </p>
                            <button className="flex-none">
                                <CrossIcon />
                            </button>
                        </article>

                        <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4">
                            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                            <p className="grow text-gray-600">
                                Complete online Javascript curse in bluuweb
                            </p>
                            <button className="flex-none">
                                <CrossIcon />
                            </button>
                        </article>

                        <article className="flex gap-4 border-b border-b-gray-400 px-4 py-4">
                            <button className="inline-block h-5 w-5 flex-none rounded-full border-2"></button>
                            <p className="grow text-gray-600">
                                Complete online Javascript curse in bluuweb
                            </p>
                            <button className="flex-none">
                                <CrossIcon />
                            </button>
                        </article>

                        <section>
                            <span> 5 item left</span>
                            <button>Clear Completed</button>
                        </section>
                    </div>
                </main>

                <section className="container mx-auto px-4">
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </section>

                <p className="text-center">Drag and drop reorder list</p>
            </div>
        </>
    );
};

export default Todo;
