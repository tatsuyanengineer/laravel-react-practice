<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Video;
use Inertia\Inertia;

class VideoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $videos = Video::select('id','title','created_at')->get();
        return Inertia::render('Videos/Index', [
            'videos' => $videos,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Videos/Create', []);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data  = $request->all();
        $data['user_id'] = auth()->id();
        Video::create($data);

        return redirect()->route('video.index')->with('success','動画を作成しました');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $video = Video::find($id);
        return Inertia::render('Videos/Show', [
            'video' => $video,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $video = Video::find($id);
        return Inertia::render('Videos/Edit', [
            'video' => $video,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validData = $request->validate([
            'title' => 'required|max:255',
            'description' => 'max:1000',
        ]);
        $video = Video::find($id);
        $video->update($validData);
        return redirect()->route('video.index')->with('success','動画を更新しました');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $video = Video::find($id);
        $video->delete();
        return redirect()->route('video.index')->with('success','動画を削除しました');;
    }
}
