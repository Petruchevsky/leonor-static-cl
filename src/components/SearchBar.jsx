"use client";
import "./SearchBar.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import { posts } from "@/data/posts";

function SearchBar() {
	const [query, setQuery] = useState("");
	const [filteredPosts, setFilteredPosts] = useState([]);
   const [showResults, setShowResults] = useState(false)

   useEffect(()=>{
      console.warn(filteredPosts)
   }, [query])

	const handleSearch = (query) => {
		if (query) {
			const filtered = posts.filter(
				(post) =>
					post.content.toLowerCase().includes(query.toLowerCase()) ||
					post.title.toLowerCase().includes(query.toLowerCase())
			);
			setFilteredPosts(filtered);
         setShowResults(true)
		} else {
			setFilteredPosts([]);
         setShowResults(false)
		}
	};

	const handleChange = (e) => {
		setQuery(e.target.value);
		handleSearch(e.target.value);
	};

   const cleanInput = () => {
      setShowResults(false)
   }

	return (
		<main>
			<form className="search">
				<input
					type="text"
					id="search"
					name="q"
					placeholder="Qué Estás Buscando...?"
					value={query}
					onChange={handleChange}
					required
				/>
				<input type="submit" value="Ir" />
				{filteredPosts.length > 0 && showResults && (
					<section className="search-results active">
						{filteredPosts.map((p) => (
							<div className="result" key={p.id}>
								<Link href={`/blog/${p.id}`} onClick={cleanInput}>
                           <h5>Entrada de Blog</h5>
									<p className="title-result">{p.title.substring(0, 35) + '...'}</p>
									<p>{p.content.substring(0, 200) + '...'}</p>
								</Link>
							</div>
						))}
					</section>
				)}
			</form>
		</main>
	);
}

export default SearchBar;
